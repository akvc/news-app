import { useForm } from 'react-hook-form';

interface SearchFormData {
  keyword: string;
}

interface SearchBarProps {
  setKeyword: (keyword: string) => void;
}

export const SearchBar = ({ setKeyword }: SearchBarProps) => {
  const { register, handleSubmit, reset } = useForm<SearchFormData>();
  const searchKeyword = ({ keyword }: SearchFormData) => {
    setKeyword(keyword);
    reset();
  };

  const resetSearch = () => {
    setKeyword('world');
  };

  return (
    <div className="d-flex justify-content-center">
      <form className="mx-2" onSubmit={handleSubmit(searchKeyword)}>
        <div className="input-group">
          <input
            type="search"
            className="form-control"
            placeholder="Search news"
            {...register('keyword', { required: 'true' })}
          />
          <button className="btn btn-secondary" type="submit">
            <i className="bi bi-search"></i>
          </button>
        </div>
      </form>
      <button className="btn btn-secondary" onClick={resetSearch}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
    </div>
  );
};
