import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Action, GetUserAction } from '../redux/action/action';

const Todofile = () => {

    // sort state
    const [sorted, setsorted] = useState({ sorted: "id", reversed: false });
    // search data
    const [searchData, setSearchData] = useState("");
    // get todo data in user
    const [todoUser, setTodoUser] = useState({});


    const dispatch = useDispatch();
    const responseData = useSelector(state => state.reducer.details);
    const userData = useSelector(state => state.reducer.userdetail);


    useEffect(() => {
        dispatch(Action());


    }, [dispatch]);

    // get user details 
    const getUserDetails = (id, title) => {
        // alert(id);

        setTodoUser({ id, title });
        dispatch(GetUserAction(id));


    }



    const result = responseData.length > 0 ?

        responseData.filter((val) => {
            if (searchData === '') {
                return val;
            } else if (val.title.toLowerCase().includes(searchData.toLowerCase())) {
                return val;
            }

        })
            .map((item, ind) => {
                return (
                    ind <= 9 ?
                        <tr>
                            <th scope="row" key={ind}>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.completed ? "true" : "false"}</td>
                            <td><button className='btn btn-primary' onClick={e => getUserDetails(item.id, item.title)}>View User</button></td>

                        </tr>
                        : undefined

                )


            }) : null


    // sortby id
    const sortById = () => {
        setsorted({
            sorted: "id", reversed: !sorted.reversed
        });

        const todoCopy = responseData;
        todoCopy.sort((todoA, todoB) => {
            if (sorted.reversed) {
                return todoA.id - todoB.id;
            }
            return todoB.id - todoA.id;

        });


    }


    return (
        <>
            <div className='container'>
                <h3 className='text-center pt-5'>TODO LIST</h3>
                <div className='row'>
                    <div className='col-md-8'>
                        <div className=' row'>
                            <div className='col-md-4'></div>
                            <div className='col-md-8'>

                                <div className="mt-5" role="search">
                                    <input type="text" className="form-control " placeholder="Search"

                                        onChange={e => { setSearchData(e.target.value) }}
                                        aria-label="Search" />
                                </div>

                            </div>

                        </div>
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th scope="col" width="10px" > Todo Id<i className="fa-solid fa-arrow-down" onClick={sortById}></i></th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Status</th>
                                    <th scope="col" width="150px">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result}


                            </tbody>
                        </table>

                    </div>
                    {
                        userData && <div className='col-md-4 mt-5'>
                            <h3 >User Details</h3><hr />
                            <p ><strong>Todo Id:</strong> {todoUser.id}   </p>
                            <p ><strong>Todo Title:</strong> {todoUser.title}   </p>
                            <p ><strong>User Id: </strong>  {userData.id}</p>
                            <p ><strong>Name:  </strong> {userData.name}</p>
                            <p ><strong>Email: </strong>  {userData.email}</p>


                        </div>
                    }


                </div>

            </div>


        </>
    )
}

export default Todofile
