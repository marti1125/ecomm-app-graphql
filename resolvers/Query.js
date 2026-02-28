exports.Query = {
    welcome: () => 'Weclome to the World of GraphQL!',
    numOfCourses: () => 12,
    price: () => 99.99,
    isTrainer: () => true,
    nullValue: () => 'it cannot be null',
    courses: (parent, args, context) => {
        let filteredCourses = context.courses;
        const { filter } = args;
        let { reviews } = context;
        if (filter) {
            const { discount, avgRating } = filter;
            if (discount) {
                filteredCourses = filteredCourses.filter(course => course.discount);
            }
            if ([1,2,3,4,5].includes(avgRating)) {
                filteredCourses = filteredCourses.filter(course => {
                    let sum = 0;
                    let numberOfReviews = 0;
                    reviews.forEach(review => {
                        if (review.courseId === course.id) {
                            sum += review.rating;
                            numberOfReviews++;
                        }
                    });
                    const avgCourseRating = sum / numberOfReviews;
                    return avgCourseRating >= avgRating;
                });
            }
        }
        return filteredCourses;
    },
    course: (parent, args, context) => {
        const courses = context.courses;
        const courseId = args.id;
        const course = courses.find(item => item.id === courseId);
        if (!course) return null;
        return course;
    },
    genres: (parent, args, context) => {
        const genres = context.genres;
        return genres;
    },
    genre: (parent, args, context) => {
        const genres = context.genres;
        const genreId = args.id;
        const genre = genres.find(item => item.id === genreId);
        if (!genre) return null;
        return genre;
    }
}