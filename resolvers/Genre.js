exports.Genre = {
    courses: (parent, args, context) => {
        const courses = context.courses;
        const genreId = parent.id;
        const { filter } = args;
        const genreCourses = courses.filter(item => item.genreId === genreId);
        let filteredCourses = genreCourses;
        if (filter) {
            if (filter.discount) {
                filteredCourses = genreCourses.filter(course => course.discount);
            }
        }
        return filteredCourses;
    }
}