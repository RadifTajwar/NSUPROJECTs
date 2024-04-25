import axios from 'axios';
import React, { useEffect } from 'react';
interface VoiceGenerateProps {
    index: number;
    line: string;
    title:string;
}


const VoiceGenerate: React.FC<VoiceGenerateProps> = ({ index, line,title }) => {
    console.log(line);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestBody = {
                    text: line,
                    voiceId: index,
                    title:title
                };
                await axios.post('http://localhost:5000/api/generate/speech', requestBody);
                console.log('POST request successful');
            } catch (error) {
                console.error('Error sending POST request:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array ensures this effect runs only once on component mount


    return (
        <>
            <div>
                <div className="flex justify-between mb-1 font-medium text-xs text-gray-500">
                    <span className="">Page {index + 1}</span>
                    <span className="">0%</span>
                </div>
                <div className="w-full h-3 bg-indigo-300 bg-opacity-50 rounded-full">
                    <div className="h-3 rounded-full bg-indigo-600" style={{ width: '100%' }}></div>
                </div>
            </div>
        </>
    );
};

export default VoiceGenerate;
