import React, { useState, useEffect, useRef } from 'react';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import { PropTypes } from 'prop-types';


const Export = (props) => {
    const [loading, setLoading ] = useState(false);

    const printGraph = () => {
        setLoading(true);
        const graphEle = document.querySelectorAll(".flex-container, .flex-container-point")
        const pdf = new jsPDF('l', 'pt', 'a4', false);
        console.log("graphEle", graphEle.length);
        graphEle.forEach((ele, i) => {
            html2canvas(ele).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const imgProperties = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
                console.log("pdfHeight", pdfHeight, pdfWidth);
                // pdf.addImage(imgData, "JPEG", 0, 0,590,840, undefined, false);
                pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);

                const isLast = graphEle.length === i + 1;

                isLast ? pdf.save("Download_Graphs.pdf")  : pdf.addPage();

            });
        })
        //setLoading(false);
    }


    return (
        <Box>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Grid item>
                    <Typography variant="h3" color="inherit">
                        {/* Graphs */}
                    </Typography>
                </Grid>
                <Grid item>
                    {/* <Button
                        onClick={printGraph}
                        endIcon={<PictureAsPdfIcon />}
                        variant="contained"
                    >
                        Export
                    </Button> */}
                     <a href="#!" onClick={printGraph} style={{color:"white"}}>
                    {<PictureAsPdfIcon  onClick={printGraph}/>}
                    </a>


                </Grid>
            </Grid>

        </Box>

    );

}
Export.defaultProps = {};

Export.propTypes = {
  onThemeChange: PropTypes.func,
  currentTheme: PropTypes.string,
  t: PropTypes.func
};
export default Export;
