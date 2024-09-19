import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Details() {
  const [userName, setUserName] = useState("");
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [isFilter, setIsFilter] = useState("");

  useEffect(() => {
  
    const FilterdData = data.filter((item) => item.userName !== isFilter);

    setData(FilterdData);
    setIsFilter("");
  }, [data, isFilter]);


  return (
    <Grid
      container
      sx={{
        bgcolor: {
          xs: "blue",
          sm: "green",
          md: "red",
          lg: "brown",
          xl: "purple",
        },
      }}
    >
      <Grid
        container
        item
        xs={12}
        sx={{
          display: { xs: "flex" },
          justifyContent: "center",
          flexDirection: { xs: "column", xl: "row" },
          alignItems: { xs: "center" },
          paddingTop: "70px",
          height: "100%",
          width: "100%",
        }}
      >
        <Grid item xs={6} xl={2}>
          <TextField
            id=""
            label=""
            type=""
            placeholder="Enter  Your Name"
            onChange={(e) => setUserName(e.target.value)}
            sx={{
              bgcolor: "blue",
              border: "black",
              borderRadius: "5px",
              marginRight: { xs: "10px" },
              fontSize: { xs: "5px", xl: "50px" },
              marginBottom: { xs: "15px" },
            }}
          />
        </Grid>
        <Grid item xs={6} xl={2}>
          <TextField
            id=""
            label=""
            type=""
            placeholder="Enter  Your Pic URL"
            onChange={(e) => setUrl(e.target.value)}
            sx={{
              bgcolor: "blue",
              border: "black",
              borderRadius: "5px",
              fontSize: { xs: "5px", xl: "50px" },
              marginBottom: { xs: "15px" },
              marginRight:{xs:"10px"},
              

            }}
          />
        </Grid>

        <Grid item xs={1}  >
          <Button
            variant="contained"
            sx={{
              padding: { xs: "20px 5px 17px 5px", xl: "13px 0px 13px 0px" },
              marginTop: { xs: "2.5px", xl: "5px" },
              marginLeft: { xs: "1px" },
              bgcolor: "greenyellow",
              fontSize: { xs: "10px", xl: "15px" },
              marginBottom: { xs: "15px" },

            }}
            onClick={() => setData([...data, { userName, url }])}
          >
            ADD USER
          </Button>
        </Grid>

        {data.map((item, index) => (
          <Card
          key={index}
            userName={item.userName}
            url={item.url}
            setIsFilter={setIsFilter}
            setData={setData}
            index={index}
          />
        ))}
      </Grid>
    </Grid>
  );
}

function Card(Props) {
  const [show, setShow] = useState(false);
  return (
    <Grid container xs={12}>
      <Grid
        container
        item
        xs={12}
        sx={{
          border: "1px solid white",
          height: "200px",
          paddingTop: "40px",
          marginTop: "2%",
          marginRight: "23%",
          borderRadius: "20px",
          marginLeft: { xs: "2%", xl: "23%" },
        }}
      >
        <Grid
          item
          xs={5}
          sx={{
            height: { xs: "150px", xl: "70px" },
            width: { xs: "300px", xl: "2px" },
          }}
        >
          <img
            src={Props.url}
            alt="not found"
            style={{ height: "100%", borderRadius: "100%", width: "50%" }}
          />
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ display: "flex", alignItems: "center", marginBottom: "10%" }}
        >
          <Grid
            item
            xs={2}
            sx={{
              marginLeft: {xs:"5%",xl:"10%"},

              fontSize: {
                xs: "18px",
                sm: "30px",
                md: "40px",
                lg: "50px",
                xl: "30px",
              },
              color: "green",
            }}
          >
            <h3> {Props.userName}</h3>

            <Grid
              item
              xs={2}
              sx={{ display: "flex", justifyContent: "center",width:{xs:"375px"} }}
            >
              <Button
                variant="contained"
                sx={{
                  bgcolor: "greenyellow",
                  fontSize: { xs: "9px", xl: "12px" },
                  bgcolor: "red",
                  margin: { xs: "1px 3px 4px 90px", xl: "5px 15px 20px 130px" },
                  width:{xs:"100%"}
                }}
                onClick={() => Props.setIsFilter(Props.userName)}
              >
                DELETE
              </Button>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "greenyellow",
                  width:{xs:"100%"},
                  fontSize: { xs: "9px", xl: "12px" },
                  bgcolor: "red",
                  margin: { xs: "1px 0px 4px 10px", xl: "5px 0px 20px 0px" },
                }}
                onClick={() => setShow(!show)}
              >
                {show ? "cancel" : "edit"}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <EditButton
        show={show}
        setShow={setShow}
        setData={Props.setData}
        index={Props.index}

      />
    </Grid>
  );
}

function EditButton(Props) {
  const [name, setName] = useState("");
  const [nUrl, setNUrl] = useState("");

  const handleSave = () => {

    if(name.length===0 && nUrl.length===0){ // if the both inputfields are blank means it should not return any thing
      return ;
    }

    Props.setData((prevData) => {
      const newData = [...prevData];

      const obj={
             userName: name.length>0 ? name : newData[Props.index].userName , 
             url:nUrl.length>0 ? nUrl : newData[Props.index].url
             }

      newData[Props.index] =obj;

      return newData;
    });

  };


  // const handleSave = () => {
  //   // Update the data in the Pizza component
  //   Props.setData((prevData) => {
  //     const newData = [...prevData];            // this code is used to edit the two input fields && then to save
  //     newData[Props.index] = { userName: name, url: nUrl };
  //     return newData;
  //   });


  return (
    <Grid container item xs={12} sx={{ display: Props.show ? "flex" : "none" }}>
      <Grid item xs={12}>
        <TextField
          id=""
          label=""
          type=""
          placeholder="Enter  Your Name"
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id=""
          label=""
          type=""
          placeholder="Enter  Your Pic URL"
          onChange={(e) => setNUrl(e.target.value)}
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" onClick={handleSave}>
          SAVE
        </Button>
      </Grid>
    </Grid>
  );
 } 

export default Details;
