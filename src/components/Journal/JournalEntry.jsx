import moment from "moment";
import { useDispatch } from "react-redux";
import { activeNote } from "../../actions/notes";

const JournalEntry = ({ id, date, tittle, body, url }) => {
  const dispatch = useDispatch();
  const noteDate = moment(date);

  const handleInputClick = () => {
    const note = {
      id,
      body,
      date,
      tittle,
    };
    dispatch(activeNote(id, note));
  };

  return (
    <div className="journal__entry pointer" onClick={handleInputClick}>
      {url && (
        <div
          className="journal__entry-picture"
          style={{
            backgroundSize: "cover",
            backgroundImage: `url(${url})`,
          }}
        ></div>
      )}

      <div className="journal__entry-body">
        <p className="journal__entry-title">{tittle}</p>
        <p className="journal__entry-content">{body}</p>
      </div>

      <div className="journal__entry-date-box">
        <span>{noteDate.format("dddd")}</span>
        <h4>{noteDate.format("Do")}</h4>
      </div>
    </div>
  );
};

export default JournalEntry;
