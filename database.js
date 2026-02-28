const courses = [
    { id: "book-01", name: 'NodeJS', title: 'NodeJS', price: 99.99, discount: true, genreId: 'cat-01' },
    { id: "book-02", name: 'GraphQL', title: 'GraphQL', price: 149.99, discount: false, genreId: 'cat-01' },
    { id: "book-03", name: 'React', title: 'React', price: 129.99, discount: true, genreId: 'cat-01' },
    { id: "book-04", name: 'Angular', title: 'Angular', price: 119.99, discount: false, genreId: 'cat-01' },
]

const genres = [
    { id: "cat-01", name: 'Technical' },
    { id: "cat-02", name: 'History' },
]

const reviews = [
    { id: "rev-01", date: "2026-01-01", title: "This is bad!", comment: "I don't like this course.", rating: 1, courseId: "book-01" },
    { id: "rev-02", date: "2026-01-02", title: "This is good!", comment: "I like this course.", rating: 5, courseId: "book-01" },
    { id: "rev-03", date: "2026-01-03", title: "This is average!", comment: "I think this course is okay.", rating: 3, courseId: "book-02" },
]

module.exports = {
    courses,
    genres,
    reviews,
}