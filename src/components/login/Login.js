import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const Login = ({ handleChange }) => {
  let history = useHistory();
  const paperStyle = {
    padding: 20,
    height: "73vh",
    width: 300,
    margin: "0 auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const initialValues = {
    username: "",
    password: "",
    remember: false,
  };
  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .email("please enter valid email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });
  const onSubmit = (values, props) => {
    console.log(values);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
    history.push("/home");
  };
  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Connexion</h2>
        </Grid>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          {(props) => (
            <Form>
              <Field
                as={TextField}
                label="E-Mail"
                name="username"
                placeholder="Entrer Votre email"
                fullWidth
                required
                helperText={<ErrorMessage name="username" />}
              />
              <Field
                as={TextField}
                label="Mot de Passe"
                name="password"
                placeholder="Entrer un mot de passe"
                type="password"
                fullWidth
                required
                helperText={<ErrorMessage name="password" />}
              />
              <Field
                as={FormControlLabel}
                name="remember"
                control={<Checkbox color="primary" />}
                label="Se Souvenir de Moi"
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                disabled={props.isSubmitting}
                style={btnstyle}
                fullWidth
              >
                {props.isSubmitting ? "Loading" : "Se Connecter"}
              </Button>
            </Form>
          )}
        </Formik>
        <Typography>
          <Link href="#">Mot de passe ?</Link>
        </Typography>
        <Typography>
          {" "}
          Avez vous deja un compte ?<Link href="#">S'inscrire</Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Login;
