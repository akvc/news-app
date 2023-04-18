import { useForm } from 'react-hook-form';

interface SearchFormData {
  keyword: string;
}

interface SearchBarProps {
  setKeyword: (keyword: string) => void;
}

export const SearchBar = ({ setKeyword }: SearchBarProps) => {
  const { register, handleSubmit } = useForm<SearchFormData>();
  const searchKeyword = ({ keyword }: SearchFormData) => {
    setKeyword(keyword);
  };
  return (
    <form className="mx-3" onSubmit={handleSubmit(searchKeyword)}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search news"
          {...register('keyword', { required: 'true' })}
        />
        <button className="btn btn-secondary" type="submit">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};
