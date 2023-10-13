import { useState, useEffect } from "react";
import { Paper, FormControlLabel, FormGroup, Checkbox, TextField, Typography } from "@mui/material";

const Entry = () => {
  const [twelveCha, setTwelveCha] = useState(false);
  const [specialChar, setSpecialChar] = useState(false);
  const [password, setPassword] = useState("");
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumberCase] = useState(false);

  const containsSpecialChars = (str) => {
    const specialChars = /[-’/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g;
    return specialChars.test(str);
  };

  const containsUpperCase = (str) => {
    return str !== str.toLowerCase();
  };

  const containsLowerCase = (str) => {
    return str !== str.toUpperCase();
  };

  const containsNumber = (str) => {
    const numbers = /[0-9]/;
    return numbers.test(str);
  };

  const passWordOnChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (password.length >= 12) {
      setTwelveCha(true);
    }

    setSpecialChar(containsSpecialChars(password));
    setHasUpperCase(containsUpperCase(password));
    setHasLowerCase(containsLowerCase(password));
    setHasNumberCase(containsNumber(password));
  }, [password]);
  return (
    <div>
      <Paper sx={{ height: "70vh", width: "70vw", margin: "auto", padding: 10 }}>
        <Typography paddingBottom={1} fontSize={24} fontWeight={"bold"}>
          Password Validator
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <TextField
                id="outlined-basic"
                variant="outlined"
                label="password"
                onChange={(e) => {
                  passWordOnChange(e);
                }}
              />
            }
          />
        </FormGroup>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={twelveCha} />}
            label="Atleast 12 characters long"
          />
          <FormControlLabel
            control={<Checkbox checked={specialChar} />}
            label="Has special character(s)"
          />
          <FormControlLabel control={<Checkbox checked={hasUpperCase} />} label="Has upper case" />
          <FormControlLabel control={<Checkbox checked={hasLowerCase} />} label="Has lower case" />
          <FormControlLabel control={<Checkbox checked={hasNumber} />} label="Has number(s)" />
        </FormGroup>
      </Paper>
    </div>
  );
};

export default Entry;
