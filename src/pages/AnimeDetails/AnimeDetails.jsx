import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { addToWatching } from '../../services/animeService'
import { getAnime } from '../../services/animeService'

export default function AnimeDetails({ setAnimeList, animeList, user }) {
    const location = useLocation()
    const [anime, setAnime] = useState(location.state)
    const [loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        animeTitle: '',
        animeId: '',
        coverImage: ''
    })
    const [watching, setWatching] = useState(false)

    useEffect(() => {
        window.scrollTo(0, 0)
        // this checks if anime was retrieved from MongoDB or Anilist API and will also retrieve anime if directly clicking on link
        if (anime) {
            // if retrieved from mongo...
            if (anime._id) {
                // set form data with data already present "mongodb anime data"
                setFormData({
                    animeTitle: anime.animeTitle,
                    animeId: anime.animeId,
                    coverImage: anime.coverImage
                })
                // get specific anime here
                getAnime(anime.animeId)
                    .then(anime => {
                        // update anime state
                        setAnime(anime)
                        setLoading(false)
                    })
            } else {
                // if there is no anime._id, anime was retrieved from AniList API is to be assumed 
                setFormData({
                    animeTitle: anime.title.userPreferred,
                    animeId: anime.id,
                    coverImage: anime.coverImage.large
                })
                setLoading(false)
            }
        } else {
            // anime was not found or link was directly entered 
            const animeId = parseInt(location.pathname.replace(/\D+/, ''))
            getAnime(animeId)
                .then(anime => {
                    // update anime state
                    setAnime(anime)
                    setLoading(false)
                })
            // set form data retrieved from AniList API 
            setFormData({
                animeTitle: anime.title.userPreferred,
                animeId: anime.id,
                coverImage: anime.coverImage.large
            })
        }
    }, [])

    const handleAddToWatching = () => {
        addToWatching(formData)
        setAnimeList([...animeList, anime])
        setWatching(true)
    }

    const handleRemoveFromWatching = () => {
        animeList.splice(animeList.indexOf(anime.title.userPreferred), 1)
        // remove anime from backend here
        setWatching(false)
    }

    if (loading && anime) {
        return (
            <>
                <h1 className='text-center text-3xl'>loading....</h1>
            </>
        )
    } else {
        return (
            <>
                <main>
                    {anime.bannerImage &&
                        <div className="bg-no-repeat bg-cover bg-center h-80" style={{ backgroundImage: `url('${anime.bannerImage}')` }}>
                        </div>
                    }
                    <div className='flex justify-center'>
                        <div className='mt-5'>
                            <img src={anime.coverImage.large} alt={anime.title.english ? anime.title.english : anime.title.userPreferred} />
                            <div className='flex flex-col'>
                                {user &&
                                    <>
                                        {/* conditionally render buttons based on state from currWatching to be able to remove from watching/planning to watch */}
                                        {watching ?
                                            <>
                                                <button onClick={handleRemoveFromWatching} className='justify-self-center btn btn-danger mt-5'>Remove From Watching</button>
                                                {/* <button className='justify-self-center btn btn-secondary mt-5'>Add To Planning</button> */}
                                            </>
                                            :
                                            <>
                                                <button onClick={handleAddToWatching} className='justify-self-center btn btn-info mt-5'>Add To Watching</button>
                                                {/* <button className='justify-self-center btn btn-secondary mt-5'>Add To Planning</button> */}
                                            </>
                                        }
                                    </>
                                }
                            </div>
                        </div>
                        <div className='m-8 w-3/5'>
                            <div className='text-center mb-4'>
                                <p className='text-2xl'>{anime.title.english ? anime.title.english : anime.title.userPreferred}</p>
                            </div>
                            <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
                        </div>
                    </div>

                    <div className='flex justify-around my-5'>
                        <div className='flex flex-col'>
                            <p>{`Popularity: ${anime.popularity}`}</p>
                            {anime.status === 'NOT_YET_RELEASED' ? <p>Status: Unreleased</p> : <p>{`Status: ${anime.status}`}</p>}
                            {anime.episodes === null ? <p>Episodes: TBA</p> : <p>{`Episodes: ${anime.episodes}`}</p>}
                            {/* Fix Dates based on data given */}
                            {anime.startDate.year &&
                                <>
                                    <h3>Start Date</h3>
                                    <p>{anime.startDate.month}/{anime.startDate.day}/{anime.startDate.year}</p>
                                </>
                            }
                            {anime.endDate.year ?
                                <>
                                    <h3>End Date</h3>
                                    <p>{anime.endDate.month}/{anime.endDate.day}/{anime.endDate.year}</p>
                                </>
                                :
                                <>
                                    <h3>End Date</h3>
                                    <p>TBA</p>
                                </>
                            }
                        </div>

                        {anime.trailer &&
                            <>
                                <div className='mb-8'>
                                    <p>Trailer</p>
                                    {/* Fix iframe source using &origin=https://myofficialdomain.com  at the end of the youtube link*/}
                                    <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${anime.trailer.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                                </div>
                            </>
                        }
                        {!anime.trailer &&
                            <p>No Trailer</p>
                        }
                    </div>
                </main>
            </>

        )
    }
}
