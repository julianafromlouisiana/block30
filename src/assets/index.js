//Write fetchAllBooks from API

export const fetchAllBooks = async () => {
    try {
        const response = await fetch('/api/books', {
            headers: {
                'Content-Type': 'application.json',
            },
        });
    
        if (!response.ok) {
            throw new Error('Failed to fetch books');
        }

        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }

    };

        
    