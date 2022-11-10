import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs w-3/4 mx-auto my-16">
      <div className="bolg-item">
        <h5>Difference between SQL and NoSQL</h5>
        <p>
          1. SQL databases are relational, NoSQL databases are non-relational.
        </p>
        <p>
          2. SQL databases use structured query language and have a predefined
          schema. NoSQL databases have dynamic schemas for unstructured data.
        </p>
        <p>
          3. SQL databases are vertically scalable, while NoSQL databases are
          horizontally scalable.
        </p>
        <p>
          4. SQL databases are table-based, while NoSQL databases are document,
          key-value, graph, or wide-column stores.
        </p>
        <p>
          5. SQL databases are better for multi-row transactions, while NoSQL is
          better for unstructured data like documents or JSON.
        </p>
      </div>
      <div className="bolg-item">
        <h5>What is JWT? How does it work?</h5>
        <p>
          <p>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object.
          </p>

          <p>
            It is compact, readable and digitally signed using a private key/ or
            a public key pair by the Identity Provider(IdP). So the integrity
            and authenticity of the token can be verified by other parties
            involved.
          </p>
          <p>
            JWT differ from other web tokens in that they contain a set of
            claims. Claims are used to transmit information between two parties.
            What these claims are depends on the use case at hand. For example,
            a claim may assert who issued the token, how long it is valid for,
            or what permissions the client has been granted. <br />
            A JWT is a string made up of three parts, separated by dots (.), and
            serialized using base64. In the most common serialization format,
            compact serialization, the JWT looks something like this:
            xxxxx.yyyyy.zzzzz. <br />
            Once decoded, you will get two JSON strings: <br />
            1. The header and the payload. <br />
            2. The signature. <br />
            The JOSE (JSON Object Signing and Encryption) header contains the
            type of token — JWT in this case — and the signing algorithm. <br />
            The payload contains the claims. This is displayed as a JSON string,
            usually containing no more than a dozen fields to keep the JWT
            compact. This information is typically used by the server to verify
            that the user has permission to perform the action they are
            requesting. <br />
            There are no mandatory claims for a JWT, but overlaying standards
            may make claims mandatory. For example, when using JWT as bearer
            access token under OAuth2.0, iss, sub, aud, and exp must be present.
            some are more common than others. <br />
            The signature ensures that the token hasn’t been altered. The party
            that creates the JWT signs the header and payload with a secret that
            is known to both the issuer and receiver, or with a private key
            known only to the sender. When the token is used, the receiving
            party verifies that the header and payload match the signature.{" "}
            <br />
          </p>
        </p>
      </div>
      <div className="bolg-item">
        <h5>What is the difference between javascript and NodeJS?</h5>
        <p>
          1. NodeJS : NodeJS is a cross-platform and opensource Javascript
          runtime environment that allows the javascript to be run on the
          server-side. Nodejs allows Javascript code to run outside the browser.
          Nodejs comes with a lot of modules and mostly used in web development.
        </p>
        <p>
          2. JavaScript : Javascript is a Scripting language. It is mostly
          abbreviated as JS. It can be said that Javascript is the updated
          version of the ECMA script. Javascript is a high-level programming
          language that uses the concept of Oops but it is based on prototype
          inheritance.
        </p>
      </div>
      <div className="bolg-item">
        <h5>How does NodeJS handle multiple requests at the same time?</h5>
        <p>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
