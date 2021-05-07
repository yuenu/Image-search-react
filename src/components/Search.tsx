import React, {useState} from 'react';
// Type
interface Props {
  onFormSubmit: (term: string) => Promise<void>
}

const SearchBar: React.FC<Props> = ({ onFormSubmit }) => {
  const [ term, setTerm ] = useState<string>('')
  
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onFormSubmit(term)
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={(event) => onSubmit(event)}>
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
