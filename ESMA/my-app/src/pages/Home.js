import { postList } from '../dataFake'

const HomePage = () => {
    console.log(postList);
    return `
        <div>
            
            ${postList.map(function (post) {
        return `
                    <div>
                        <h2>${post.title}</h2>
                        <p>${post.content}</p>
                    </div>
                `
    }).join("")}
        </div>
    `
}

export default HomePage