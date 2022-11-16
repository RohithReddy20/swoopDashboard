import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import { Button, CircularProgress, Box, Modal, TextField } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

import styles from "./Matches.module.css";

import AlertParent from "../../Components/Alert/Alert";
import { StyledEngineProvider } from "@mui/material/styles";

function AddBanner({ openBanner, setOpenBanner }) {
  const [startEpoch, setStartEpoch] = useState("");
  const [endEpoch, setEndEpoch] = useState("");
  const [url, setUrl] = useState("");
  const [open, setOpen] = useState(openBanner);
  const [loading, setLoading] = useState(false);

  const [openAlert, setOpenAlert] = useState(false);
  const [type, setType] = useState("success");
  const [result, setResult] = useState("Banner added successfully");

  const { user, getMatches } = useAuth();

  const fail = () => {
    setType("error")
    setResult("Unable to add Banner")
    setOpenAlert(true)
  }

  const addBanner = async () => {
    const data = {
      start_epoch: startEpoch,
      end_epoch: endEpoch,
      url: url
    }
    await fetch(
      "https://asia-south1-swoop-fc-prod.cloudfunctions.net/dashboard/banners/add",
      {
        method: "POST",
        headers: {
          "x-access-token": user?.accessToken,
        },
        body: JSON.stringify(data)
      }
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        if (!data.success) {
          fail();
        }
        if (data.success) {
          getMatches();
          setOpen(false);
          setOpenBanner(false);
        }
      })
      .catch((err) => {
        fail();
      });
  };

  const handleClick = () => {
    setOpenAlert(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenAlert(false);
  };


  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    background: "#fff",
    display:"flex",
    flexDirection:"column",
    width:"min(300px, 90%)",
    padding: "20px",
    borderRadius:"5px",
    gap:"20px"
  };

  return (
    <div className={styles.addBanner}>
        <Modal
          open={open}
          onClose={() => {
            setOpenBanner(false);
            setOpen(false);
          }}
        >
          <Box sx={style}>
            <TextField
              required
              id="outlined-required"
              label="Start Epoch"
              onChange={(e) => setStartEpoch(e.target.value)}
              value={startEpoch}
            />
            <TextField
              required
              id="outlined-required"
              label="End Epoch"
              onChange={(e) => setEndEpoch(e.target.value)}
              value={endEpoch}
            />
            <TextField
              required
              id="outlined-required"
              label="URL"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            <Button
            className = {styles.addBannerButton}
            onClick={async() => {
              setLoading(true)
              await addBanner()
              setLoading(false)
            }} sx={{width:"200px", margin:"0 auto"}} variant="contained" endIcon={loading? <CircularProgress sx={{color:"#fff"}} size="25px" />:<SendIcon />}>
              {loading? "Loading" : "Add Banner"}
            </Button>
          </Box>
        </Modal>

        <StyledEngineProvider injectFirst>
        <AlertParent
          type={type}
          open={openAlert}
          setOpen={setOpenAlert}
          handleClick={handleClick}
          handleClose={handleClose}
          result={result}
        />
      </StyledEngineProvider>
    </div>
  );
}

export default AddBanner;
