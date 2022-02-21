function RowData({ data }) {
  return (
    <div className="flex-start table-row">
      <div className="flex-start table-cell ">
        <img
          src={data.image}
          alt="company logo"
          width="30px"
          height="30px"
          style={{ borderRadius: "10%", marginRight: "20px" }}
        />
        <div className="table-cell-data">{data.name}</div>
      </div>
      <div
        className="table-cell-data table-cell "
        style={{ marginLeft: "110px" }}
      >
        {data.created}
      </div>
      <div
        className="table-cell-data table-cell "
        style={{ marginLeft: "110px" }}
      >
        {data.reporter}
      </div>
      <div
        className="table-cell-data table-cell "
        style={{ marginLeft: "130px" }}
      >
        {data.due}
      </div>
      <div
        className={`table-cell-data table-cell stats-1 ${
          data.stats === "Open" ? "stats-2" : "stats-1"
        }`}
        style={{ marginLeft: "100px" }}
      >
        {data.stats}
      </div>
    </div>
  );
}

export default RowData;
