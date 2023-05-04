import * as React from 'react';
import { Theme, useTheme } from '@mui/material/styles';
import { Box, OutlinedInput, InputLabel,
         MenuItem, FormControl, Chip,
         FormControlLabel, FormLabel, Checkbox,
         FormGroup } from '@mui/material'
import Select, { SelectChangeEvent } from '@mui/material/Select';

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
            width: 250
        },
    },
};

const majors = [ // In the future, we'd obviously expand/import this
    'Computer Science',
    // 'Data Analytics',
    // 'Statistics',
    // 'Math',
    // 'AI'
];

function getStyles(name: string, majorName: readonly string[], theme: Theme) {
    return {
        fontWeight:
            majorName.indexOf(name) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium
    };
}




export const MRPage: React.FC = () => {
    const theme = useTheme();
    // Major Selection vars
        const [majorName, setMajorName] = React.useState<string[]>([]);
        console.log(majorName);
        const handleChange = (event: SelectChangeEvent<typeof majorName>) => {
            const { target: { value }, } = event;
            setMajorName(
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
        };
    // Class section checkmark vars
        const [classes, setClasses] = React.useState<string[]>([]);
        console.log(classes);
        const handleClassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const index = classes.indexOf(event.target.value)
            if (index === -1) {
              setClasses([...classes, event.target.value])
            } else {
              setClasses(classes.filter(req => req !== event.target.value))
            }   
        };
    
    return (
        <div className="flex md:flex-row gap-3 pt-5 px-24 flex-wrap gap-y-10 bg-gray-200 order-1">
        {/* This div is the header and subtitle for the page */}
            <div className="flex h-24 flex-wrap order-2 w-screen basis-1/2">
                <h1 className="md:text-5xl text-2xl font-bold md:leading-tight leading-snug text-cyan-600">
                    Major Requirements
                </h1>
                <h2 className="text-black md:w-2/3 md:py-1 leading-relaxed justify-start">
                    Find your major and its required classes
                </h2>
            </div> 
        {/* Major Selection */}
            <div className="flex h-24 flex-wrap order-3 basis-full">
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="major-input">Majors</InputLabel>
                    <Select
                        labelId="major-input-label"
                        id="major-input"
                        multiple
                        value={majorName}
                        onChange={handleChange}
                        input={<OutlinedInput id="select-multiple-chip" label="Majors" />}
                        renderValue={(selected) => (
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                {selected.map((val) => (
                                    <Chip key={val} label={val} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {majors.map((major) => (
                            <MenuItem
                                key={major}
                                value={major}
                                style={getStyles(major, majorName, theme)}
                            >
                        {major}
                    </MenuItem>
                ))}
            </Select>
            </FormControl>
            </div>
        {/* Major Header */}
            <div className="flex flex-wrap order-4 basis-1/3">
                <h3 className="md:text-3xl text-2xl font-bold md:leading-tight leading-snug text-cyan-600">
                    Computer Science
                </h3>
            </div>
        {/* Show Required Classes */}
            <div className="flex flex-wrap order-5 basis-full mb-24">
                <div className="flex-col w-full">
                    <FormLabel>
                        <span className="font-bold md:leading-tight leading-snug text-cyan-600">Core Classes</span>
                        <br /> Only one of MATH54 and MATH101 is required
                    </FormLabel>
                </div>
                <FormGroup>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        <FormControlLabel
                            label="CS65: Introduction to Computer Science I"
                            control={<Checkbox value='CS65'checked={classes.includes('CS65')} onChange={handleClassChange} />}                          />
                        <FormControlLabel
                            label="CS66: Introduction to Computer Science II"
                            control={<Checkbox value='CS66'checked={classes.includes('CS66')} onChange={handleClassChange} />}                          />
                        <FormControlLabel
                            label="CS67: Object-Oriented Programming"
                            control={<Checkbox value='CS67'checked={classes.includes('CS67')} onChange={handleClassChange} />}                          />
                        <FormControlLabel
                            label="CS83: Computer Ethics"
                            control={<Checkbox value='CS83'checked={classes.includes('CS83')} onChange={handleClassChange} />}                          />
                        <FormControlLabel
                            label="CS130: Computer Organization and Assembly Language Programming"
                            control={<Checkbox value='CS130'checked={classes.includes('CS130')} onChange={handleClassChange} />}                        />
                        <FormControlLabel
                            label="CS137: Algorithm Analysis"
                            control={<Checkbox value='CS137'checked={classes.includes('CS137')} onChange={handleClassChange} />}                        />
                        <FormControlLabel
                            label="CS188: Software Engineering"
                            control={<Checkbox value='CS188'checked={classes.includes('CS188')} onChange={handleClassChange} />}                        />
                        <FormControlLabel
                            label="CS191: The Capstone Course"
                            control={<Checkbox value='CS191'checked={classes.includes('CS191')} onChange={handleClassChange} />}                        />
                        <FormControlLabel
                            label="MATH50: Calculus I"
                            control={<Checkbox value='MATH50'checked={classes.includes('MATH50')} onChange={handleClassChange} />}                      />
                        <FormControlLabel
                            label="MATH54: Discrete Mathematics"
                            control={<Checkbox value='MATH54'checked={classes.includes('MATH54')} onChange={handleClassChange} />}            />
                        <FormControlLabel
                            label="MATH101: Mathematical Reasoning"
                            control={<Checkbox value='MATH101'checked={classes.includes('MATH101')} onChange={handleClassChange} />}            />
                    </Box>
                </FormGroup>
                        
                <div className="flex-col w-full">
                    <FormLabel>
                        <span className="font-bold md:leading-tight leading-snug text-cyan-600">CS Upper-Division Component (9 hours)</span>
                        <br /> This includes IS145, IS150, and IS160 and excludes CS140, Tutoring course, and Capstone course
                    </FormLabel>
                </div>
                <FormGroup>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        <FormControlLabel
                            label="100+ CS Class"
                            control={<Checkbox value='100+CS_1'checked={classes.includes('100+CS_1')} onChange={handleClassChange} />}                  />
                        <FormControlLabel
                            label="100+ CS Class"
                            control={<Checkbox value='100+CS_2'checked={classes.includes('100+CS_2')} onChange={handleClassChange} />}                  />
                        <FormControlLabel
                            label="100+ CS Class"
                            control={<Checkbox value='100+CS_3'checked={classes.includes('100+CS_3')} onChange={handleClassChange} />}                  />
                    </Box>
                </FormGroup>
                
                <div className="flex-col w-full">
                    <FormLabel>
                        <span className="font-bold md:leading-tight leading-snug text-cyan-600">Additional Upper-Division Component (6 hours)</span>
                        <br />Includes same classes as above, as well as upper-division courses in math, statistics, actuarial science, and quantitative methods
                    </FormLabel>
                </div>
                <FormGroup>
                    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                        <FormControlLabel
                            label="100+ Class"
                            control={<Checkbox value='100+other_1'checked={classes.includes('100+other_1')} onChange={handleClassChange} />}                  />
                        <FormControlLabel
                            label="100+ Class"
                            control={<Checkbox value='100+other_2'checked={classes.includes('100+other_2')} onChange={handleClassChange} />}                  />
                    </Box>
                </FormGroup>
            </div>
    </div>

    )
}