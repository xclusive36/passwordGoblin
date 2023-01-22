import NoteListItem from "./NoteListItem";
import PasswordListItem from "./PasswordListItem";
import SkeletonText from "./SkeletonTextItem";

interface ContainerProps {
    array: any[];
    type: string;
    sortBy: string;
    sortOrder: string;
    search: string;
}

const List: React.FC<ContainerProps> = ({
    array,
    type,
    sortBy,
    sortOrder,
    search,
}) => {
    // This component will display a password list or a notes list.
    // It will sort and filter the array based on the sortBy, sortOrder and search props.
    // It will display a skeleton text if the array is empty.
    
    return (
        <>
            {array
                .sort((objA, objB) =>
                    sortBy === "date"
                        ? sortOrder === "asc"
                            ? new Date(objB?.date).getTime() -
                              new Date(objA?.date).getTime()
                            : new Date(objA?.date).getTime() -
                              new Date(objB?.date).getTime()
                        : sortOrder === "asc"
                        ? objA?.title.localeCompare(objB?.title)
                        : objB?.title.localeCompare(objA?.title)
                )
                .filter((p) => p.title.includes(search.toLowerCase()))
                .map((p) => (
                    <div key={p.id}>
                        {type === "password" ? (
                            <PasswordListItem password={p} />
                        ) : (
                            <NoteListItem note={p} />
                        )}
                    </div>
                ))}
            {!array.length && [0, 1, 2].map((e) => <SkeletonText key={e} />)}
        </>
    );
};

export default List;
