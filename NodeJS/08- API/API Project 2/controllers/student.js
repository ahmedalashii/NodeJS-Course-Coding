const getProfile = (request, response, next) => {
    const studentId = request.query.id;

    // queryDB
    return response.status(200).json({
        id: studentId,
        name: "Ahmed",
        collage: "IT",
    });
};

const getGrades = (request, response, next) => {
    const studentId = request.query.studentId;

    // query DB

    return response.status(200).json([
        {
            id: 1,
            name: "Math",
            grade: 90,
        },
        {
            id: 1,
            name: "Data Structure",
            grade: 90,
        },
    ]);
};

const getTimetable = (request, response, next) => {
    const studentId = request.query.studentId;

    // query DB

    return response.status(200).json([
        {
            id: 1,
            name: "Math",
            day: "Sunday",
            time: "10:00 AM",
        },
        {
            id: 2,
            name: "Data Structure",
            day: "Modnay",
            time: "8:00 AM",
        },
    ]);
};

module.exports = {
    getProfile,
    getGrades,
    getTimetable,
};