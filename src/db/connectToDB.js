import chalk from "chalk";
import mongoose from "mongoose"

const connectToDB= async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);

    console.log(chalk.blueBright("MongoDB Connected Successfully"));
  } catch (error) {
    console.log("Error connecting to MongoDB: ", error.message);
  }
  
  // try {
  //   await mongoose.connect(process.env.MONGO_DB_URI, {
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     // createIndexes: true, // Remove this line
  //     // Replace useCreateIndex with createIndexes
  //     // useCreateIndex: true,
  //     // useFindAndModify: false,
  //   });

  //   // Mongoose 6.x and later no longer support useCreateIndex
  //   // Use createIndexes instead
  //   await mongoose.connection.createIndexes();

  //   console.log(chalk.blueBright("MongoDB Connected Successfully"));
  // } catch (error) {
  //   console.error(chalk.red("Error connecting to MongoDB: ", error.message));
  //   throw new Error("Unable to connect to MongoDB");
  // }
}

export default connectToDB;