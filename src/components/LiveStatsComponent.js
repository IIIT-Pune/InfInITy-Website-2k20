import React from "react";
import axios from "axios";
import { baseUrl } from "../baseUrl";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "../assets/scss/livestats.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { green, red } from "@material-ui/core/colors";
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#000",
    color: theme.palette.common.white,
  },
  body: {
    paddingBottom: 0,
    fontSize: 12,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});
class LiveStatsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    AOS.init({
      duration: 2000,
    });
    axios.get(`${baseUrl}api/livestats`).then((res) => {
      const data = res.data;
      this.setState({ data: data.list });
    });
  }
  render() {
    var starcolor = [
      "#666666",
      "#1E7D22",
      "#3366CC",
      "#684273",
      "#FFBF00",
      "#FF7F00",
      "#D0011B",
    ];
    const { classes } = this.props;
    if (this.state.data) {
      const head = this.state.data[0];
      const boby = this.state.data.slice(1);
      return (
        <div className="table-live">
          <section id="hero">
            <div className="container">
              <div className="row">
                <div className="col-12 d-flex align-items-center justify-content-center">
                  <div data-aos="zoom-out">
                    <h2>Rankings of Infinity 2020 </h2>
                  </div>
                </div>
              </div>
            </div>

            <svg
              className="hero-waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28 "
              preserveAspectRatio="none"
            >
              <defs>
                <path
                  id="wave-path"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="wave1">
                <use
                  xlinkHref="#wave-path"
                  x="50"
                  y="3"
                  fill="rgba(255,255,255,0.1)"
                />
              </g>
              <g className="wave2">
                <use
                  xlinkHref="#wave-path"
                  x="50"
                  y="0"
                  fill="rgba(255,255,255, .2)"
                />
              </g>
              <g className="wave3">
                <use xlinkHref="#wave-path" x="50" y="9" fill="none" />
              </g>
            </svg>
          </section>
          <div>
            <div className=" table-in">
              <Paper className={classes.root}>
                <TableContainer className={classes.container}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>{head[0]}</StyledTableCell>
                        <StyledTableCell align="left" style={{ minWidth: 170 }}>
                          {head[1]}
                          {head[2]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[3]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[4]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[5]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[6]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[7]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[8]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[9]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[10]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[11]}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {head[12]}
                        </StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {boby.map((row, index) => (
                        <StyledTableRow
                          key={row[0]}
                          data-aos="fade-zoom-in"
                          data-aos-offset="0"
                        >
                          <StyledTableCell>{row[0]}</StyledTableCell>
                          <StyledTableCell>
                            <span
                              className="rating"
                              style={{
                                backgroundColor: starcolor[row[1][0] - 1],
                              }}
                            >
                              {row[1].substring(0, 2)}
                            </span>
                            {row[1].substring(2)}
                            <br />
                            <span
                              style={{
                                fontSize: "9px",
                                fontStyle: "italic",
                              }}
                            >
                              {row[2].length > 30
                                ? row[2].substring(0, 30) + "..."
                                : row[2]}
                            </span>
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            style={{ color: "green" }}
                          >
                            {row[3].length >= 1 ? (
                              <span>{row[3].substring(0, 4)}</span>
                            ) : (
                              row[3]
                            )}
                            {row[3][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[3][5]})
                              </span>
                            ) : row[3].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[3][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell
                            align="right"
                            style={{ color: "gray" }}
                          >
                            {row[4]}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[5].length >= 1 ? (
                              <span>{row[5].substring(0, 4)}</span>
                            ) : (
                              row[5]
                            )}
                            {row[5][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[5][5]})
                              </span>
                            ) : row[5].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[5][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[6].length >= 1 ? (
                              <span>{row[6].substring(0, 4)}</span>
                            ) : (
                              row[6]
                            )}
                            {row[6][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[6][5]})
                              </span>
                            ) : row[6].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[6][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[7].length >= 1 ? (
                              <span>{row[7].substring(0, 4)}</span>
                            ) : (
                              row[7]
                            )}
                            {row[7][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[7][5]})
                              </span>
                            ) : row[7].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[7][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[8].length >= 1 ? (
                              <span>{row[8].substring(0, 4)}</span>
                            ) : (
                              row[8]
                            )}
                            {row[8][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[8][5]})
                              </span>
                            ) : row[8].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[8][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[9].length >= 1 ? (
                              <span>{row[9].substring(0, 4)}</span>
                            ) : (
                              row[9]
                            )}
                            {row[9][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[9][5]})
                              </span>
                            ) : row[9].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[9][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[10].length >= 1 ? (
                              <span>{row[10].substring(0, 4)}</span>
                            ) : (
                              row[10]
                            )}
                            {row[10][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[10][5]})
                              </span>
                            ) : row[10].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[10][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[11].length >= 1 ? (
                              <span>{row[11].substring(0, 4)}</span>
                            ) : (
                              row[5]
                            )}
                            {row[11][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[11][5]})
                              </span>
                            ) : row[11].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[11][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            {row[12].length >= 1 ? (
                              <span>{row[12].substring(0, 4)}</span>
                            ) : (
                              row[12]
                            )}
                            {row[12][5] > 0 ? (
                              <span style={{ color: "red" }}>
                                ({row[12][5]})
                              </span>
                            ) : row[12].length > 1 ? (
                              <span style={{ color: "green" }}>
                                ({row[12][5]})
                              </span>
                            ) : (
                              <span></span>
                            )}
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </div>
          </div>
        </div>
      );
    } else return <div>...Loading</div>;
  }
}
export default withStyles(useStyles)(LiveStatsComponent);
