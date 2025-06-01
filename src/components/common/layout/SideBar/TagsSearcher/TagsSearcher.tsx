import { searchParamsKeys } from '../../../../../constants/searchParams';
import { SearchParams } from '../../../../../types/searchParams';
import BlockWrapper from '../BlockWrapper';

const TagsSearcher = ({
  handleSearchParams,
  tagsParams,
  tags,
}: {
  handleSearchParams: (paramsToUpdate: SearchParams) => string;
  tagsParams: string[];
  tags: string[];
}) => {
  const handleTagsChange = (tag: string) => {
    const newTagsParams = tagsParams.includes(tag)
      ? tagsParams.filter((item) => item !== tag)
      : [...tagsParams, tag];
    handleSearchParams({
      [searchParamsKeys.LIKE(searchParamsKeys.TAGS)]: newTagsParams,
      [searchParamsKeys.PAGE]: '1',
    });
  };

  return (
    <BlockWrapper title="Tags">
      <ul className="flex justify-center gap-3 flex-wrap">
        {tags.map((tag) => (
          <li key={tag}>
            <button
              onClick={() => handleTagsChange(tag)}
              className={`border border-gray-300 rounded-xl px-3 py-1 ${tagsParams.includes(tag) ? 'bg-blue-50' : 'bg-white'}`}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    </BlockWrapper>
  );
};

export default TagsSearcher;
