import { NO_MATCH } from "../common"

const binarySearch = (items: any[], item: any): number => {


    let lowestPt : number = 0 
    let highestPt : number = items.length - 1 
    let result : number = 0

    while (result == 0) {
        let middlePt: number = ((lowestPt + highestPt)/2)

        if (item === middlePt) {
            result = middlePt
        }

        else if  (item > middlePt) { 
            lowestPt = middlePt
            middlePt = (lowestPt + highestPt)/2

            if (item === middlePt) {
                result = middlePt
            }

            else {

                
            }



        }

        
    }



    return NO_MATCH;
}

export default binarySearch;