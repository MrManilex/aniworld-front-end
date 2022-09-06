import { useLocation } from 'react-router-dom'

export default function AnimeDetails() {
    const location = useLocation()
    const anime = location.state

    return (
        <>
            <main>
                {anime.bannerImage &&
                    <img src={anime.bannerImage} alt={`${anime.title.romaji}'s banner`} />
                }
                <div>
                    <img src={anime.coverImage.large} alt={anime.title.romaji} />
                    <div className='text-center'>
                        <p>{anime.title.romaji}</p>
                    </div>
                </div>
                <p dangerouslySetInnerHTML={{ __html: anime.description }}></p>
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
                {anime.trailer &&
                    <>
                        <iframe width="560" height="315" src={`https://www.youtube-nocookie.com/embed/${anime.trailer.id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </>
                }
                {!anime.trailer &&
                    <p>No Trailer</p>
                }
            </main>
        </>
    )
}