export async function getProduct(id){
    var response  = {
        status: 0,
        product: {
            id: '1001',
            model: 'Baseball Jersey',
            brand: {
                id: 'YBA',
                name: 'YBA'
            },
            styles: [
                {
                    id: '1001_PG',
                    name: 'aAwa',
                    photo: 'photos/2-56.jpg'
                },
                {
                    id: '1002_PG',
                    name: '',
                    photo: 'photos/2-56.jpg'
                },
                {
                    id: '1003_PG',
                    name: '',
                    photo: 'photos/2-56.jpg'
                }
            ],
            size: {},
            rating: 1,
            price: {
                number: 9.99,
                formatted: '$ 9.99'
            } 
        }
    };
    return response;
}

