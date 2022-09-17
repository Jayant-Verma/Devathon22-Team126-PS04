import {
    faBed,
    faBuilding,
    faCalendarDays,
    faCar,
    faClock,
    faPerson,
    faPlane,
    faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import TimeRangePicker from "@wojtekmaj/react-timerange-picker";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [dates, setDates] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    // const [value, onChange] = useState(["10:00", "11:00"]);
    const [startDate, setStartDate] = useState(new Date());

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    });

    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]:
                    operation === "i" ? options[name] + 1 : options[name] - 1,
            };
        });
    };

    const { dispatch } = useContext(SearchContext);

    const handleSearch = () => {
        dispatch({
            type: "NEW_SEARCH",
            payload: { destination, dates, options },
        });
        navigate("/halls", { state: { destination, dates, options } });
    };

    return (
        <div className="header">
            <div
                className={
                    type === "list"
                        ? "headerContainer listMode"
                        : "headerContainer"
                }
            >
                {type !== "list" && (
                    <>
                        <h1 className="headerTitle">
                            National Institute of Technology, Warangal
                        </h1>
                        <p className="headerDesc">
                            An Institute of National Importance
                        </p>

                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faBuilding}
                                    className="headerIcon"
                                />
                                <input
                                    type="text"
                                    placeholder="Hall name"
                                    className="headerSearchInput"
                                    onChange={(e) =>
                                        setDestination(e.target.value)
                                    }
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="headerIcon"
                                />

                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    className="headerDateInput"
                                />
                            </div>
                            <div className="headerSearchItem">
                                <button
                                    className="headerBtn"
                                    onClick={handleSearch}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Header;
