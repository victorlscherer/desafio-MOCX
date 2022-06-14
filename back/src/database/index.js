import mongoose from 'mongoose';

mongoose.connect('mongodb://host.docker.internal:27017/mocx_teste');

export default mongoose;