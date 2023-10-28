import {Tile} from './Tile';
getContent = () => {
    return [
        {
            image: 'https://www.adp.com/-/media/adp/blog/articles/featuredimages/8/5/851501_2022-workforce-trends-reliable-data-expertise-will-power-resiliency.jpg?rev=7056e0f00fec4fb0938e3511fbe703c0&h=300&w=714&la=en&hash=5DBFFBF9BBC86C2F6B93B4A5795FA2C5',
            provider: 'Microsoft',
            title: 'Microsoft Power BI Data Analyst',
            courseType: 'Professional Certificate',
        },
        {
            image: 'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/ac/31c1233bd3422ca088055ee4509d09/DeepLearning_GenAI_with_LLMs_Centered_Banner_1000x1000.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50',
            provider: 'DeepLearning AI',
            title: 'Generatinve AI with Large Language Models',
            courseType: 'Course',
        },
    ];
}
export function App(){
    const content_list = getContent();
    const tile1Content = content_list[0];
    const tile2Content = content_list[1];
    return (
        <section>
            <div className="featured-tiles">
                <Tile content={tile1Content}></Tile>
                <Tile content={tile2Content}></Tile>
            </div>
        </section>
    )
}