import mongoose from "mongoose";

interface ContactAttrs {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: string;
}

interface ContactModel extends mongoose.Model<ContactDoc> {
  build(attrs: ContactAttrs): ContactDoc;
}

interface ContactDoc extends mongoose.Document {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  age: string;
}

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
});

contactSchema.statics.build = (attrs: ContactAttrs) => {
  return new Contact(attrs);
};

const Contact = mongoose.model<ContactDoc, ContactModel>(
  "Contact",
  contactSchema
);

export default Contact;
