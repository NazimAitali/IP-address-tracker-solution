import React from "react";
import errImg from "../../assets/images/error-message.png";

const Card = ({ error, loading, data }) => {
  return (
    <div className="Detail-content">
      <div className="Localisation-card">
        {error ? (
          <div className="Error">
            {" "}
            <img src={errImg} alt="img-error" />
            <p>{error} or maximum request reached API LIMITED</p>
          </div>
        ) : loading ? (
          "Loading"
        ) : (
          <>
            <div className="Localisation-informations">
              <div className="Card-title">IP ADDRESS</div>
              <div className="Card-data">{data ? data.ip : null}</div>
            </div>
            <div className="Localisation-informations">
              <div className="Card-title">LOCATION</div>
              <div className="Card-data">
                {" "}
                {data
                  ? `${data.location.region.substring(0, 20)},${
                      data.location.country
                    }`
                  : null}{" "}
              </div>
            </div>
            <div className="Localisation-informations">
              <div className="Card-title">TIMEZONE</div>
              <div className="Card-data">
                {" "}
                {data ? `UTC ${data.location.timezone}` : null}
              </div>
            </div>
            <div className="Localisation-informations">
              <div className="Card-title">ISP</div>
              <div className="Card-data">
                {" "}
                {data ? data.isp.substring(0, 20) : null}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Card;
