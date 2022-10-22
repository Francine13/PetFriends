import Pet from "../assests/dicionarios/feeds.json";

export const getFeed = async (feedId) => {
    return (Pet.feeds.find(feed => feed._id==feedId))
}