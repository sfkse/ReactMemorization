import React from 'react';
import ListItem from './ListItem';


const List = React.memo(({ students, add }) => {
    // console.log(students);

    return (
        <div className="list">
            <button style={{ width: "70%", height: "50px", marginTop: "20px" }} onClick={add}>Add</button>
            {students?.map(student => {
                return <ListItem key={student.id} student={student} add={add} />
            })}
        </div>
    )
})

export default List;

