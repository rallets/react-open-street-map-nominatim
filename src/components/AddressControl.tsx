import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Form, InputGroup, Spinner } from 'react-bootstrap';
import useOpenStreetMapNominatim, { NominatimResult } from '../hooks/useOpenStreetMapNominatim';
import { useDebounce } from '../hooks/useDebounce';
import EditIcon from '@mui/icons-material/Edit';
import UndoIcon from '@mui/icons-material/Undo';

interface IProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: (value: string) => void;
}

export const AddressControl: React.FC<IProps> = ({ value, onChange, onBlur }) => {
  const [isEditing, setIsEditing] = useState(!value);
  const [address, setAddress] = useState(value);
  const [candidateAddress, setCandidateAddress] = useState('');
  const [previousAddress, setPreviousAddress] = useState(value);

  const [osmQuery, setOsmQuery] = useState<string | undefined>(undefined);
  const [showResults, setShowResults] = useState(false);

  // NB: do not reduce to less than 1 second
  // https://operations.osmfoundation.org/policies/nominatim/
  // It says "No heavy uses (an absolute maximum of 1 request per second)."
  const debunceMs = 1000 * 2;
  const debouncedSearchAddress: string | undefined = useDebounce<string | undefined>(candidateAddress, debunceMs);

  // comma-separated list of "ISO 3166-1alpha2" country codes.
  // As example here is set to Norway and Sweden.
  const countryCodes: string[] = ['no', 'se'];
  const [isSearching, , results] = useOpenStreetMapNominatim(osmQuery ?? '', countryCodes);

  const placeholder = 'Enter an address';

  useEffect(() => {
    if (debouncedSearchAddress && debouncedSearchAddress.length > 5) {
      setOsmQuery(debouncedSearchAddress);
    }
  }, [debouncedSearchAddress]);

  useEffect(() => {
    setShowResults(true);
  }, [results]);

  if (!isEditing) {
    return (
      <>
        <InputGroup>
          <Form.Control
            as={'input'}
            type="text"
            value={address ?? ''}
            disabled
            placeholder={placeholder}
          ></Form.Control>
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => {
              setCandidateAddress(address ?? '');
              setIsEditing(true);
            }}
          >
            <EditIcon></EditIcon>
          </Button>
        </InputGroup>
      </>
    );
  }

  return (
    <>
      <InputGroup>
        <Form.Control
          as={'input'}
          type="text"
          placeholder={placeholder}
          onChange={(e) => {
            const v = e.target.value;
            setCandidateAddress(v);
          }}
          onBlur={(e) => onBlur(address)}
          value={candidateAddress ?? ''}
        ></Form.Control>
        {previousAddress && (
          <Button
            size="sm"
            variant="outline-secondary"
            onClick={() => {
              setAddress(previousAddress);
              setCandidateAddress(previousAddress);
              setIsEditing(false);
            }}
          >
            <UndoIcon></UndoIcon>
          </Button>
        )}
        {isSearching && (
          <InputGroup.Text>
            <Spinner className="mx-2" as="span" animation="border" size="sm" role="status" aria-hidden="true" />
          </InputGroup.Text>
        )}
      </InputGroup>

      {results !== undefined && results.length > 0 && showResults && (
        <Dropdown.Menu show={true}>
          {results
            .filter(x => x)
            .map(x => x as NominatimResult)
            .sort((v1, v2) => v1.importance - v2.importance)
            .map((result, index) => {
              return (
                <Dropdown.Item
                  key={index}
                  eventKey={index}
                  onClick={() => {
                    const selected = result?.display_name ?? '';
                    if (selected === address) {
                      setIsEditing(false);
                      return;
                    }

                    setPreviousAddress(address);
                    setAddress(selected);
                    setCandidateAddress(selected);
                    setIsEditing(false);
                    onChange(selected);
                  }}
                >
                  {result?.display_name ?? '-'}
                </Dropdown.Item>
              );
            })}
        </Dropdown.Menu>
      )}
    </>
  );
};
