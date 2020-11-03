import React, { useState } from 'react';
import s from '../../styles/settingsPopup.module.scss'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        width:'50%'
    }
}));

const SettingsPopup = (props) => {
    const classes = useStyles();
    return (
        <div className={s.popup}>
            <div className={s.popup_inner}>
                <RadioGroup aria-label="quiz" name="quiz" value={props.settingsCmponent.value} onChange={(e) => { props.handleRadioChange(e) }}>
                    <h3>Switch type, default cycle</h3>
                    <FormControlLabel
                        value="from_beginning_to_end"
                        control={<Radio color="primary" />}
                        label="from_beginning_to_end"
                        labelPlacement="from_beginning_to_end"
                    />
                    <FormControlLabel
                        value="cycle"
                        control={<Radio color="primary" />}
                        label="cycle"
                        labelPlacement="cycle"
                    />
                </RadioGroup>
                <hr />
                <h3>Auto play carusel, default 3s</h3>
                <div className="isCounter">
                    <div>
                        <FormControlLabel
                            value={props.settingsCmponent.isCounter}
                            control={<Switch color="primary" checked={props.settingsCmponent.isCounter} onChange={(e) => { props.handleIsCounterChange(e) }} />}
                            label="Counter"
                            name="isCounter"
                            labelPlacement="Top"
                        />
                    </div>
                    <TextField id="outlined-basic" label="Speed" variant="outlined" value={props.settingsCmponent.isCounter_Speed} onChange={(e) => { props.handleIsCounter_SpeedChange(e) }} />
                </div>
                <hr />
                <div>
                    <h3>Navigation settings</h3>
                    <FormControlLabel
                        value={props.settingsCmponent.navigation}
                        control={<Switch color="primary" checked={props.settingsCmponent.navigation}  onChange={(e) => { props.handleNavigation(e) }} />}
                        label="Navigation"
                        name="Navigation"
                        labelPlacement="Top"
                    />
                    <FormControlLabel
                        value={props.settingsCmponent.dots}
                        control={<Switch color="primary" checked={props.settingsCmponent.dots} onChange={(e) => { props.handleNavigation(e) }} />}
                        label="Dots"
                        name="Dots"
                        labelPlacement="Top"
                    />
                </div>
                <hr />
                <div>
                    <h3>Picture display type</h3>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="Image">Image</InputLabel>
                        <Select
                        native
                        value={props.settingsCmponent.stateImage}
                        onChange={props.handleChangeImage}
                        >
                            <option value={'oneImage'}>1 type of display</option>
                            <option value={'threeImage_On_the_sides'}>2 type of display</option>
                            <option value={'twoImage'}>3 type of display</option>
                        </Select>
                    </FormControl>
                </div>
                <hr />
            </div>

            <style jsx>{`
            hr{
                width: 100%;
            }
            .isCounter{
                display: flex;
                align-self: center;
                justify-content: space-around;
                align-items: center;
            }
            p{
                margin:0;
            }
        `}</style>

        </div>
    )
}

export default SettingsPopup