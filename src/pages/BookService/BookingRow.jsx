import img from "../../assets/images/download.png"
const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
    const { _id, email, name, service, status } = booking;



    return (
        <tr>
            <th>
            </th>
            <td>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle bg-red-500 btn-sm text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </td>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">{service}</div>
                    </div>
                </div>
            </td>

            <td>
                {email}
            </td>
            <td>Purple</td>
            <th>
                {
                    status === 'confirm' ? <button className="btn text-white bg-green-500 btn-xs">Confirm</button> : <button onClick={() => handleUpdate(_id)} className="btn text-white bg-red-500 btn-xs">Pending</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;