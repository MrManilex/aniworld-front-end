import { useLocation } from 'react-router-dom'

export default function AnimeDetails() {
    const location = useLocation()
    const anime = location.state

    return (
        <>
            <main className='items-center'>
                {anime.bannerImage &&
                    <>
                        <div className='bg-center'>
                            <img src={anime.bannerImage} alt={`${anime.title.english ? anime.title.english : anime.title.userPreferred}'s banner`} />
                        </div>
                    </>
                }
                <div className='flex mx-8'>
                    <img className='self-center' src={anime.coverImage.large} alt={anime.title.english ? anime.title.english : anime.title.userPreferred} />
                    <div className='m-8'>
                        <div className='text-center mb-4'>
                            <p className='text-2xl'>{anime.title.english ? anime.title.english : anime.title.userPreferred}</p>
                        </div>
                        <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
                    </div>
                </div>

                <div className='flex flex-row mx-8 mt-8'>
                    <div className='flex flex-col w-3/12 '>
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
                        {anime.endDate.year &&
                            <>
                                <h3>End Date</h3>
                                <p>{anime.endDate.month}/{anime.endDate.day}/{anime.endDate.year}</p>
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
