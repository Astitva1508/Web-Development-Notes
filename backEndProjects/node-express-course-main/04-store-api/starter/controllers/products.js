const products = require('../models/product');

const getAllFilesStatic=async (req,res,next)=>{
    const Products= await products.find({});//To return all the products
    // const Products= await products.find({featured:true});//To return all the products that are featured
    // throw new Error('Kucch to gadbad hai bhaiya')
    res.status(200).json({Products,nbHits:Products.length});
}


const getAllFiles = async(req,res,next)=>{
    // const Products= await products.find(req.query)  
    //Better approach than this is to pull out the properties out of the req.query() that you want to apply to the find filter
    //This is the way to treat the properties that are not on the model


    const {featured ,company ,name , sort , fields , numericFilters } = req.query;

    const queryObject = {}
    //Making our own query object with only those parameters of url that match with the schema


    if (numericFilters){
        const operatorMap={
            '>' : '$gt',
            '>=': '$gte',
            '<' : '$lt' ,
            '<=' : '$lte',
            '=' : '$eq'
        }
        const regEx = /\b(>|<|>=|<=|=)\b/g
        let filters=numericFilters.replace(regEx,(match)=>`-${operatorMap[match]}-`)
        //callback function runs if there is a match of the contents inside the regEx with the nummericFilters string
        //This is the expression to replace the match string

        const options = ['price' , 'rating'] // Passing the fields on which above filter can be applied
        filters=filters.split(',').forEach(item => {
            //Array Destructuring
            const  [ field , operator , value] = item.split('-')
            if (options.includes(field)){
                queryObject[field]= {[operator]:Number(value)};
            }
        });
    }

    console.log(queryObject)

    if (featured){
        queryObject.featured= (featured==='true'?true:false);
    }
    if (company){
        queryObject.company=company
    }
    if (name){
        queryObject.name = { $regex:name , $options:'i' }
        //all the names that contain the pattern of the 'name' variable are returned 
        //setting options as i makes sure that search return is case insensitive
    }
    
    let result = products.find(queryObject);

    // let result = await products.find(queryObject); is the wrong code
//What await makes sure that inside the result variable , we dont have a query object but a returned list of items
    if (sort){   //If the user passes sort in the url at all , then this functionality is to be invoked
        let sortList = sort.replace(',',' ');
        // let sorted = sort.split(',').join(' ');
        result=result.sort(sortList)
    }
    else{    //default sorting when the user does not provide the sort functionality
        result=result.sort('createdAt')
    }

    if (fields){
        let fieldList=fields.split(',').join(' ');
        result = result.select(fieldList);
    }



//Apply these two functionalities at last only on the search result 
    const page = Number(req.query.page) || 1 ;
    const limit =Number( req.query.limit)|| 10
    
    const skip= (page-1)*limit
    result.skip(skip).limit(limit);

    const Products=await result;
    res.status(200).json({Products,nbHits:Products.length});
}

//limit(), sort () , skip() and select() can be chained on the return result of find()
//Ways to apply sort filter
// const Products = await products.find(queryObject).sort({name:1,price:-1});
//This is the alternative approach
// const Products = await products.find(queryObject).sort('name -price');  

module.exports={getAllFiles,getAllFilesStatic};