import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

function Pizza() {
  const [userName, setUserName] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const FilterData = data.filter((item) => item.userName !== filter);
    setData(FilterData);
    setFilter("");
  }, [data, filter]);

  return (
    <Grid container sx={{ bgcolor: "blue" }}>
      <Grid item xs={12}>
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ margin: "30px 20px 0px 0px" }}
          placeholder="Enter your Name"
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ margin: "30px 20px 0px 0px" }}
          placeholder="Enter your Pic Url"
          onChange={(e) => setUrl(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ padding: "17px 5px 17px 5px", marginTop: "30px" }}
          onClick={() => setData([...data, { userName, url }])}
        >
          Add User
        </Button>
      </Grid>

      {data.map((item) => (
        <Card name={item.userName} url={item.url} setFilter={setFilter} />
      ))}
    </Grid>
  );
}

function Card(Props) {
  const [show, setShow] = useState(false);

  return (
    <Grid
      item
      xs={10}
      sx={{
        border: "1px solid white",
        margin: "20px 0px 20px 100px",
        borderRadius: "20px",
      }}
    >
      <Typography variant="h1" component="h2">
        {Props.name}
      </Typography>

      <img src={Props.url} alt="not found" />

      <Button
        variant="contained"
        sx={{ padding: "17px 5px 17px 5px", marginTop: "30px" }}
        onClick={() => Props.setFilter(Props.name)}
      >
        Delete
      </Button>
      <Button
        variant="contained"
        sx={{ padding: "17px 5px 17px 5px", marginTop: "30px" }}
        onClick={() => setShow(!show)}
      >
        {show ? "cancel" : "edit"}

      </Button>
      <Edit   show={show} setShow={setShow} />

    </Grid>
  );
}

function Edit(Props){
  // const{show}=Props;
const[name,setName]=useState("");
const[nUrl,setNUrl]=useState("");
const[nData,setNData]=useState([]);

  return(
    <Grid container   sx={{display: Props.show ? "flex" : "none"}}>
      <Grid container item xs={12}   >
      <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ margin: "30px 20px 0px 0px" }}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          sx={{ margin: "30px 20px 0px 0px" }}
          placeholder="Enter your Pic Url"
          onChange={(e) => setNUrl(e.target.value)}
        />

        <Button
          variant="contained"
          sx={{ padding: "17px 5px 17px 5px", marginTop: "30px" }}
          onClick={() => setNData([...nData, { name, nUrl }])}
        >
          Save
        </Button>

      </Grid>
    </Grid>
  );
}

export default Pizza;
