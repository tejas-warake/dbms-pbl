import sql from '../models/dbConfig.js';

export const addStudent = (req, res) => {
    const {prn, stdname, mobile, email, pass} = req.body;
    const q = `INSERT INTO student (prn, stdname, mobile, email, pass) VALUES (?, ?, ?, ?, ?)`
    const data = [prn, stdname, mobile, email, pass];

    try {
        sql.query(q, data, (err, result, fields) => {
            if (err)
                throw err;
            console.log(result);
            res.redirect('/student');
        })
    } catch (error) {
        console.log(`Some error occured! ${error}`);
    }
}

export const getStudents = (req, res) => {
    const q = `SELECT * from student`;
    try {
        sql.query(q, (err, fields) => {
            if (err)
                throw err;
            // console.log(result);
            res.render('home', { students : fields });
        })
    } catch(err) {
        console.log(err);
    }
}

// edit page rendering for student
export const editStudent = (req, res) => {
    const prn = req.params.prn;
    let q = `SELECT * from student where prn = ${prn}`;
    try {
        sql.query(q, (err, fields) => {
            if (err) 
                throw err;
            res.render('editStudent', { student : fields[0] });
        })
    } catch(err) {
        console.log(err);
    }
}

// handling update request for student
export const updateStudent = (req, res) => {
    const {stdname, mobile, email, pass} = req.body;
    const prn = req.params.prn;
    console.log(prn);
    console.log(pass);
    const q = `UPDATE student SET stdname=${stdname}, mobile=${mobile}, email=${email}, pass=${pass} WHERE prn=${prn};`;

    try {
        sql.query(q, (err, result) => {
            if (err)
                throw err;
            console.log("Hello");
            res.redirect('/student');
        })
    } catch(err) {
        console.log(err);
    }
}


export const deleteStudent = (req, res) => {
    const prn = req.params.prn;
    const q = `DELETE from student WHERE prn = ${prn}`;

    try {
        sql.query(q, (err, result) => {
            if (err)
                throw err;
            console.log("Deleted!");
            res.redirect('/student');
        })
    } catch(err) {
        console.log(err);
    }
}