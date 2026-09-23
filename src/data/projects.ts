import type { Project, ProjectCategory, ProjectFilter } from '../types/project';

export const PROJECT_CATEGORIES: ProjectCategory[] = [
  'Computer Vision',
  'NLP / RAG',
  'Deep Learning',
  'Machine Learning',
  'Time Series',
];

export const PROJECT_FILTERS: ProjectFilter[] = ['All', ...PROJECT_CATEGORIES];

/** All deep-learning projects live in one shared repository. */
const DEEP_LEARNING_REPO = 'https://github.com/Raafat-Nagy/Deep-Learning-Projects';

/**
 * Every project below is extracted from the AI Projects Hub README:
 * https://github.com/Raafat-Nagy/AI-Projects-Hub
 */
export const projects: Project[] = [
  // ------------------------------------------------------------------
  // Computer Vision
  // ------------------------------------------------------------------
  {
    title: 'Vision Chat',
    tagline: 'Local vision-language AI with conversation memory',
    description:
      'A stateful vision chat assistant built with llama.cpp, LangChain and Chainlit. Upload an image once, ask follow-up questions, and keep the conversation context throughout the session — fully local inference.',
    category: 'Computer Vision',
    technologies: ['llama.cpp', 'LangChain', 'Chainlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Vision-Chat' },
      { type: 'demo', url: 'https://youtu.be/rjfEHkhLEhU' },
    ],
    image: 'media/vision-chat.jpg',
    videoId: 'rjfEHkhLEhU',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'VisionSeek AI',
    tagline: 'Semantic image retrieval for custom datasets',
    description:
      'End-to-end semantic image retrieval system supporting text-based, image-based and hybrid search. Google SigLIP multimodal embeddings are indexed with FAISS for cosine-similarity search, exposed through FastAPI REST APIs with a React frontend for dataset management, result visualization and similarity scoring.',
    category: 'Computer Vision',
    technologies: ['SigLIP', 'FAISS', 'FastAPI', 'React', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/VisionSeek-AI' },
      { type: 'demo', url: 'https://youtu.be/ZqEm67eRX3g' },
    ],
    videoId: 'ZqEm67eRX3g',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'Background Removal Studio',
    tagline: 'AI-powered background removal studio',
    description:
      'AI web application for high-quality background removal built on BiRefNet and PyTorch. Features transparent PNG generation, background replacement, GPU acceleration, Docker support and a modern responsive UI.',
    category: 'Computer Vision',
    technologies: ['BiRefNet', 'PyTorch', 'FastAPI', 'Docker', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Background-Removal-Studio' },
      { type: 'demo', url: 'https://youtu.be/O9JE4Gl0QDs' },
    ],
    videoId: 'O9JE4Gl0QDs',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'Vehicle Detection, Tracking, Counting & Speed Estimation',
    tagline: 'Real-time traffic monitoring system',
    description:
      'Real-time traffic monitoring with YOLO and ByteTrack: detects, tracks and counts vehicles, estimates speed using perspective transformation, and supports configurable counting zones and custom YOLO models.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'ByteTrack', 'OpenCV', 'Python'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Raafat-Nagy/Vehicle-Speed-Estimation-and-Counting-YOLO-Supervision',
      },
      { type: 'demo', url: 'https://youtu.be/1HSTwBKCELk' },
    ],
    videoId: '1HSTwBKCELk',
    thumbMaxres: true,
    featured: true,
  },
  {
    title: 'YOLO Object Detection App',
    tagline: 'Real-time object detection web app',
    description:
      'Real-time object detection web app with a FastAPI backend and JavaScript frontend. Features drag & drop uploads, multiple model options, smart video streaming, dark mode UI and smooth asynchronous processing.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'FastAPI', 'JavaScript', 'OpenCV'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/YOLO-Object-Detection-App' },
      { type: 'demo', url: 'https://youtu.be/ONM9z99RVaU' },
    ],
    videoId: 'ONM9z99RVaU',
    thumbMaxres: true,
  },
  {
    title: 'Smart Face Attendance System',
    tagline: 'Automated face-recognition attendance',
    description:
      'Real-time face recognition attendance system built with OpenCV and face_recognition. Detects faces via webcam, logs attendance automatically with CSV export, and offers optional API integration for backend synchronization.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'face_recognition', 'Python'],
    links: [{ type: 'github', url: 'https://github.com/Raafat-Nagy/SmartFace_Attendance_System' }],
  },
  {
    title: 'Student Entry & Exit Tracking',
    tagline: 'Zone-based people flow tracking',
    description:
      'Tracks and counts students entering and exiting halls using YOLO and OpenCV, with Shapely for zone-based direction detection. Includes CSV logging and API reporting.',
    category: 'Computer Vision',
    technologies: ['YOLO', 'OpenCV', 'Shapely', 'Python'],
    links: [
      {
        type: 'github',
        url: 'https://github.com/Raafat-Nagy/Real_Time_Student_Entry_and_Exit_Tracking_via_Computer_Vision',
      },
    ],
  },
  {
    title: 'Facial Landmark & Drowsiness Detection',
    tagline: 'Real-time fatigue monitoring',
    description:
      'Real-time facial landmark detection and drowsiness monitoring using the EAR method, built with OpenCV and dlib for accurate fatigue alerts that enhance driver and workplace safety.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'dlib', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Facial-Landmark-and-Drowsiness-Detection' },
      { type: 'demo', url: 'https://youtu.be/aCKkCBUu3DM' },
    ],
    videoId: 'aCKkCBUu3DM',
    thumbMaxres: true,
  },
  {
    title: 'Object Detection Telegram Bot',
    tagline: 'Object detection as a chat bot',
    description:
      'Asynchronous Telegram bot that runs real-time object detection on user-submitted images, returning automated annotations with detailed detection summaries.',
    category: 'Computer Vision',
    technologies: ['OpenCV', 'python-telegram-bot', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Object-Detection-Telegram-Bot' },
      { type: 'demo', url: 'https://youtu.be/0K8c3HZsd2U' },
    ],
    videoId: '0K8c3HZsd2U',
    thumbMaxres: true,
  },

  // ------------------------------------------------------------------
  // NLP / RAG
  // ------------------------------------------------------------------
  {
    title: 'End-to-End RAG Assistant',
    tagline: 'Chat with any PDF using retrieval-augmented generation',
    description:
      'RAG-based assistant for chatting with PDF documents in natural language. Combines LangChain, FAISS and HuggingFace embeddings with a Groq LLM for retrieval and generation, behind a FastAPI backend with a web interface for document upload and querying.',
    category: 'NLP / RAG',
    technologies: ['LangChain', 'FAISS', 'HuggingFace', 'Groq', 'FastAPI'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/End-to-End-RAG-Assistant' },
      { type: 'demo', url: 'https://youtu.be/BU5qdgPPQN0' },
    ],
    videoId: 'BU5qdgPPQN0',
    thumbMaxres: true,
    featured: true,
  },

  // ------------------------------------------------------------------
  // Deep Learning (all in the shared Deep Learning Projects repository)
  // ------------------------------------------------------------------
  {
    title: 'Brain Tumor MRI Classification',
    tagline: 'Medical image classification with transfer learning',
    description:
      'Brain tumor detection from MRI images using TensorFlow and ResNet50V2, with performance improved through data augmentation and transfer learning and evaluated via confusion matrices and classification reports.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'ResNet50V2', 'Transfer Learning'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Oral Diseases Classification',
    tagline: 'Multi-class oral disease diagnosis',
    description:
      'Multi-class classifier identifying six oral diseases with TensorFlow and ResNet50V2 — preprocessing, augmentation and fine-tuned pre-trained layers, assessed with detailed reports and confusion matrices.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'ResNet50V2', 'Fine-tuning'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Plant Disease Detection',
    tagline: 'CNN classifier for 38 plant disease categories',
    description:
      'Custom CNN built with TensorFlow/Keras to classify 38 plant disease categories, using batch normalization and dropout for generalization and achieving high validation accuracy through image augmentation.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'Keras', 'CNN'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'MNIST Handwritten Digit Classification',
    tagline: 'Classic digit recognition, done right',
    description:
      'CNN for 10-class handwritten digit classification on grayscale images with TensorFlow, applying data augmentation, dropout, early stopping and learning-rate scheduling, validated with accuracy metrics and prediction visualizations.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'CNN', 'Data Augmentation'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },
  {
    title: 'Autoencoder Projects on MNIST',
    tagline: 'Image compression and denoising',
    description:
      'Convolutional, simple and denoising autoencoders for image compression and noise removal, built on an encoder–decoder architecture of convolution, max-pooling and upsampling layers, evaluated by reconstruction quality.',
    category: 'Deep Learning',
    technologies: ['TensorFlow', 'Autoencoders', 'Keras'],
    links: [{ type: 'github', url: DEEP_LEARNING_REPO }],
  },

  // ------------------------------------------------------------------
  // Machine Learning
  // ------------------------------------------------------------------
  {
    title: 'Machine Learning From Scratch',
    tagline: 'Fundamental algorithms implemented from first principles',
    description:
      'Fundamental ML algorithms — linear regression, logistic regression, SVM, decision trees, KNN, clustering and PCA — implemented from scratch in Python, with an emphasis on mathematical understanding and clean, well-documented code.',
    category: 'Machine Learning',
    technologies: ['Python', 'Supervised Learning', 'Unsupervised Learning'],
    links: [{ type: 'github', url: 'https://github.com/Raafat-Nagy/Machine-Learning-From-Scratch' }],
  },
  {
    title: 'Diabetes Prediction Project',
    tagline: 'Health-risk prediction with a deployed app',
    description:
      'Machine learning models for diabetes prediction on patient health data with Python and scikit-learn — exploration, visualization, feature engineering and hyperparameter tuning — deployed as an interactive Streamlit app for real-time risk prediction.',
    category: 'Machine Learning',
    technologies: ['scikit-learn', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Diabetes_Prediction_Project' },
      { type: 'live', url: 'https://diabetes-prediction--project.streamlit.app/' },
    ],
  },
  {
    title: 'Iris Flower Species Prediction',
    tagline: 'SVM classifier with an interactive app',
    description:
      'SVM model classifying Iris species from sepal and petal measurements, with data preprocessing and exploratory analysis, delivered as a Streamlit web app with user-friendly predictions and dynamic visualization.',
    category: 'Machine Learning',
    technologies: ['SVM', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/IRIS-Project' },
      { type: 'live', url: 'https://iris-flowers-prediction.streamlit.app/' },
    ],
  },

  // ------------------------------------------------------------------
  // Time Series
  // ------------------------------------------------------------------
  {
    title: 'Bitcoin Price Forecasting System',
    tagline: 'End-to-end crypto price forecasting dashboard',
    description:
      'End-to-end time-series forecasting system for Bitcoin prices, comparing Prophet, ARIMA and Auto-ARIMA behind a full evaluation pipeline. Delivered as an interactive Streamlit dashboard with uncertainty analysis and backtesting, structured in modular data-processing, modeling and UI layers.',
    category: 'Time Series',
    technologies: ['Prophet', 'ARIMA', 'Streamlit', 'Python'],
    links: [
      { type: 'github', url: 'https://github.com/Raafat-Nagy/Bitcoin-Forecasting-App' },
      { type: 'live', url: 'https://bitcoin-forecasting-app.streamlit.app' },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectsByFilter(filter: ProjectFilter): Project[] {
  return filter === 'All' ? projects : projects.filter((project) => project.category === filter);
}

export function getProjectCounts(): Record<ProjectFilter, number> {
  const counts = Object.fromEntries(PROJECT_FILTERS.map((filter) => [filter, 0])) as Record<
    ProjectFilter,
    number
  >;
  counts.All = projects.length;
  for (const project of projects) counts[project.category] += 1;
  return counts;
}
