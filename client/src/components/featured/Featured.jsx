import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
    const { data, loading, error } = useFetch(
        "/halls/countByCity?cities=cse,shc,alc"
    );

    return (
        <div className="featured">
            {loading ? (
                "Loading please wait"
            ) : (
                <>
                    <div className="featuredItem">
                        <img
                            src="https://uimtcollege.com/wp-content/uploads/2020/03/seminar-hall-500x500.jpg"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>CSE Seminar Hall</h1>
                            <h2>{data[0]} halls</h2>
                        </div>
                    </div>

                    <div className="featuredItem">
                        <img
                            src="https://images.shiksha.com/mediadata/images/1546930342php50Q5p3.jpeg"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Seminar Halls Complex</h1>
                            <h2>{data[1]} halls</h2>
                        </div>
                    </div>
                    <div className="featuredItem">
                        <img
                            src="http://ksriet.ac.in/admin/file_manager/source/facilities/seminar-hall3.jpg?1590943930398"
                            alt=""
                            className="featuredImg"
                        />
                        <div className="featuredTitles">
                            <h1>Ambedkar Learning Center</h1>
                            <h2>{data[2]} halls</h2>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Featured;
