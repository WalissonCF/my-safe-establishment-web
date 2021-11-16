import React, { useEffect, useState } from 'react';

function OrderSummary() {
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div>
            
        </div>
    )
}