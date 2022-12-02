import React, { useState } from "react";
import { useEffect } from "react";
import { Table } from "react-bootstrap";
import { FormattedMessage } from "react-intl";
import BandDetail from "./BandDetail";

const BandsList = () => {
  const [bands, setBands] = useState([]);
  const [olderBand, setOlderBand] = useState({});
  const [selectedBand, setSelectedBand] = useState({});

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json";
    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        setBands(data);
      });
  }, []);

  useEffect(() => {
    if (bands.length > 0) {
      const olderBand = bands.reduce((prev, current) => {
        return prev.foundation_year < current.foundation_year ? prev : current;
      });
      setOlderBand(olderBand);
    }
  }, [bands]);

  return (
    <div className="d-flex justify-content-start align-items-start w-100 p-5">
      <div className="d-flex flex-column justify-content-center w-50">
        <Table bordered hover>
          <thead class="thead-light">
            <tr>
              <th>#</th>
              <th>
                <FormattedMessage id="Name" />
              </th>
              <th>
                <FormattedMessage id="Contry" />
              </th>
              <th>
                <FormattedMessage id="Genre" />
              </th>
              <th>
                <FormattedMessage id="Foundation" />
              </th>
            </tr>
          </thead>
          <tbody className="text-center table-borderless">
            {bands.map((band, index) => (
              <tr
                key={band.id}
                onClick={() => setSelectedBand(band)}
                className="table-active"
              >
                <td>{band.id}</td>
                <td className="text-primary">{band.name}</td>
                <td>{band.country}</td>
                <td>{band.genre}</td>
                <td>{band.foundation_year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {olderBand.name && olderBand.foundation_year && (
          <div>
            <FormattedMessage id="OlderBand1" /> <b>{olderBand.name}</b>{" "}
            <FormattedMessage id="OlderBand2" />
            <b>{2022 - olderBand.foundation_year}</b>
            <FormattedMessage id="Years" />
          </div>
        )}
      </div>
      {selectedBand.name && <BandDetail band={selectedBand} />}
    </div>
  );
};

export default BandsList;
