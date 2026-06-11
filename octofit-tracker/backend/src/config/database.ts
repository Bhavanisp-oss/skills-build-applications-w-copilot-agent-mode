import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoUri = process.env.DATABASE_URL || 'mongodb://localhost:27017/octofit';
    
    await mongoose.connect(mongoUri);
    
    console.log('✅ MongoDB connected successfully');
    console.log(`📍 Database: ${mongoose.connection.name}`);
    
  } catch (error) {
    console.error('❌ MongoDB connection error:', error);
    process.exit(1);
  }
};

export default connectDB;
