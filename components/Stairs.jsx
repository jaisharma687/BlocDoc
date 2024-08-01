import { motion } from "framer-motion"

//variants
const stairAnimation={
    initial:{
        top:"0%",
    },
    animate:{
        top:"100%",
    },
    exit:{
        top:["100%","0%"],
    },
}

// Reverse Index for staggered delay
const reverseIndex = (index)=>{
    const totalSteps = 384;
    return totalSteps - index - 1;
} 

const Stairs = () => {
    return (
        <>
        {[...Array(384)].map((_,index)=>{
            return (<motion.div 
            key={index} 
            variants={stairAnimation}
            initial="initial" 
            animate="animate" 
            exit="exit" 
            transition={{
                duration:0.4,
                ease:'easeInOut',
                delay: reverseIndex(index)*0.0015625,
            }}
            className="h-full w-full bg-green relative"
            />);
        })}
        </>
    )
}
export default Stairs