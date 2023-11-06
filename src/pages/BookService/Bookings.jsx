import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import BookingRow from './BookingRow';

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const url = `http://localhost:5000/bookings?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);

    const handleDelete = (id) => {
        const procced = confirm("Ary you shure want to delete?")
        if (procced) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = bookings.filter(book => book._id !== id)
                        setBookings(remaining)
                    }
                })
        }

    }

    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert("updated")

                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = "confirm"
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings)

                }
            })
    }



    return (
        <div>
            <h2>All Boookings{bookings.length}  </h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings.map(booking => <BookingRow
                                key={booking._id} booking={booking} handleDelete={handleDelete} handleUpdate={handleUpdate}
                            ></BookingRow>)
                        }

                    </tbody>
                    {/* foot */}


                </table>
            </div>
        </div>
    );
};

export default Bookings;