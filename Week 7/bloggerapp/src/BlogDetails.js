function BlogDetails() {
    const blogs = [
        {
            id: 1,
            title: "React Learning",
            author: "Stephen Biz",
            content: "Welcome to learning React!",
        },
        {
            id: 2,
            title: "Installation",
            author: "Schwezdenier",
            content: "You can install React from npm.",
        },
    ];

    return (
        <div className="section">
            <h2>Blog Details</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <strong>{blog.title}</strong>
                    <p><b>{blog.author}</b></p>
                    <p>{blog.content}</p>
                </div>
            ))}
        </div>
    );
}

export default BlogDetails;
