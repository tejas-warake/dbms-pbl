import express, { application } from 'express';
import { addStudent, getStudents, editStudent, updateStudent, deleteStudent
} from '../controllers/studentController.js';

const router = express.Router();


// get all the students
router.get('/addStudent', (req, res) => {
    res.render('addStudent');
});
 
router.get('/edit/:prn', editStudent);
router.post('/edit/:prn', updateStudent);
router.post('/addStudent', addStudent);
router.get('/delete/:prn', deleteStudent);
router.get('/', getStudents);

export default router; 