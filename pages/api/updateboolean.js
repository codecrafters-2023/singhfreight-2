// // pages/api/updateBoolean.js
// // import connectToDatabase from '../../utils/connectToDatabase';
// import connectToDatabase from '../../utils/connectToDatabase';

// export default async function handler(req, res) {
//     if (req.method === 'POST') {
//         const { id, newValue } = req.body;

//         try {
//             const db = await connectToDatabase();
//             const MyModel = db.model('MyModel');

//             const updatedDocument = await MyModel.findByIdAndUpdate(id, { booleanField: newValue }, { new: true });
//             res.status(200).json({ message: 'Boolean value updated successfully', updatedDocument });
//         } catch (error) {
//             res.status(500).json({ error: 'Error updating boolean value' });
//         }
//     } else {
//         res.status(405).json({ error: 'Method Not Allowed' });
//     }
// }


// // import React from 'react';
// // import axios from 'axios';

// // const MyComponent = () => {
// //   const handleButtonClick = async () => {
// //     try {
// //       const response = await axios.post('/api/updateBoolean', {
// //         id: 'documentId',
// //         newValue: true
// //       });
// //       console.log(response.data);
// //     } catch (error) {
// //       console.error('Error updating boolean value:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <button onClick={handleButtonClick}>Update Boolean Value</button>
// //     </div>
// //   );
// // };

// // export default MyComponent;